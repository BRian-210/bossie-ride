
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import type { LocationModel } from '@/data/location'

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
  selectedLocation
}: LocationInputFieldProps) {
  const filteredSuggestions = suggestions.filter(loc =>
    loc.name.toLowerCase().includes(value.toLowerCase()) ||
    loc.address.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <div className="space-y-2 relative">
      <Label htmlFor={`location-${label}`} className="text-sm font-medium">
        {label}
      </Label>
      
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <SafeIcon name={icon} size={18} />
        </div>
        
        <Input
          id={`location-${label}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className="pl-10 pr-4"
          autoComplete="off"
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg">
          <div className="max-h-64 overflow-y-auto">
            {filteredSuggestions.map((location) => (
              <button
                key={location.locationId}
                onClick={() => onSelectSuggestion?.(location)}
                className="w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b last:border-b-0 flex items-start gap-3"
              >
                <SafeIcon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{location.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{location.address}</p>
                </div>
                {selectedLocation?.locationId === location.locationId && (
                  <SafeIcon name="Check" size={18} className="text-primary flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* No Results */}
      {showSuggestions && value && filteredSuggestions.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg">
          <div className="px-4 py-3 text-center text-sm text-muted-foreground">
            No locations found for "{value}"
          </div>
        </Card>
      )}
    </div>
  )
}
