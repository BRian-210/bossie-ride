'use client'

import { useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'
import type { LocationModel } from '@/data/location'
import { cn } from '@/lib/utils'

interface LocationInputFieldProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  icon?: string
  suggestions?: LocationModel[]
  showSuggestions?: boolean
  onSelectSuggestion?: (location: LocationModel) => void
  selectedLocation?: LocationModel | null
  isLoading?: boolean 
  className?: string
}

export default function LocationInputField({
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  icon = 'MapPin',
  suggestions = [],
  showSuggestions = false,
  onSelectSuggestion,
  selectedLocation,
  isLoading = false,
  className,
}: LocationInputFieldProps) {
  const filteredSuggestions = useMemo(() => {
    if (!value.trim()) return suggestions.slice(0, 5) 
    const lowerValue = value.toLowerCase()
    return suggestions
      .filter(
        (loc) =>
          loc.name.toLowerCase().includes(lowerValue) ||
          loc.address.toLowerCase().includes(lowerValue)
      )
      .slice(0, 8)
  }, [value, suggestions])

  const hasSuggestions = showSuggestions && (filteredSuggestions.length > 0 || isLoading)
  const noResults = showSuggestions && value.trim() && filteredSuggestions.length === 0 && !isLoading

  return (
    <div className={cn('space-y-1.5 relative', className)}>
      <Label 
        htmlFor={`loc-${label.toLowerCase().replace(/\s/g, '-')}`} 
        className="text-sm font-medium text-foreground/90"
      >
        {label}
      </Label>

      <div className="relative">
        {/* Icon */}
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <SafeIcon name={icon} size={18} />
        </div>

        {/* Input */}
        <Input
          id={`loc-${label.toLowerCase().replace(/\s/g, '-')}`}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          className={cn(
            'pl-11 pr-10 h-12 text-base transition-all',
            'focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500',
            'placeholder:text-muted-foreground/70'
          )}
          aria-autocomplete="list"
          aria-expanded={hasSuggestions}
        />

        {/* Loading spinner or current location hint */}
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <SafeIcon name="Loader2" size={16} className="animate-spin text-primary" />
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {hasSuggestions && (
        <Card 
          className={cn(
            'absolute w-full mt-1.5 z-50 shadow-xl border border-border/50 rounded-xl overflow-hidden',
            'animate-in fade-in-60 zoom-in-95 duration-150',
            'max-h-[320px] overflow-y-auto scrollbar-thin'
          )}
        >
          {isLoading ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              <SafeIcon name="Loader2" size={20} className="animate-spin mx-auto mb-2" />
              Searching locations...
            </div>
          ) : (
            filteredSuggestions.map((loc) => (
              <button
                key={loc.locationId}
                type="button"
                onClick={() => onSelectSuggestion?.(loc)}
                className={cn(
                  'w-full px-4 py-3.5 text-left flex items-start gap-3',
                  'hover:bg-amber-50/70 transition-colors border-b last:border-b-0',
                  'focus-visible:bg-amber-100 outline-none',
                  selectedLocation?.locationId === loc.locationId && 'bg-amber-50/50'
                )}
              >
                <SafeIcon 
                  name="MapPin" 
                  size={18} 
                  className="text-amber-600 flex-shrink-0 mt-1" 
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm leading-tight truncate">
                    {loc.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    {loc.address}
                  </p>
                </div>
                {selectedLocation?.locationId === loc.locationId && (
                  <SafeIcon name="Check" size={18} className="text-amber-600 flex-shrink-0 mt-1" />
                )}
              </button>
            ))
          )}
        </Card>
      )}

      {/* No results message */}
      {noResults && (
        <Card className="absolute w-full mt-1.5 z-50 shadow-xl rounded-xl border border-border/50">
          <div className="px-5 py-4 text-sm text-muted-foreground text-center">
            No matching locations found for <span className="font-medium">"{value}"</span>
          </div>
        </Card>
      )}
    </div>
  )
}