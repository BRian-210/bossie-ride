
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'

interface PaymentMethod {
  id: string
  name: string
  icon: string
  description?: string
}

interface PaymentMethodSelectorProps {
  amount?: string
  selectedMethod?: string
  onMethodChange?: (methodId: string) => void
  onConfirm?: () => void
  methods?: PaymentMethod[]
  className?: string
}

const defaultMethods: PaymentMethod[] = [
  {
    id: 'mpesa',
    name: 'M-Pesa',
    icon: 'Smartphone',
    description: 'Pay with M-Pesa mobile money'
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: 'CreditCard',
    description: 'Pay with your card'
  },
  {
    id: 'cash',
    name: 'Cash',
    icon: 'Banknote',
    description: 'Pay with cash to driver'
  }
]

export default function PaymentMethodSelector({
  amount,
  selectedMethod = 'mpesa',
  onMethodChange,
  onConfirm,
  methods = defaultMethods,
  className = ''
}: PaymentMethodSelectorProps) {
  const handleMethodChange = (value: string) => {
    onMethodChange?.(value)
  }

  const handleConfirm = () => {
    onConfirm?.()
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        {amount && (
          <CardDescription className="text-2xl font-bold text-primary mt-2">
            {amount}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={selectedMethod} onValueChange={handleMethodChange}>
          <div className="space-y-3">
            {methods.map((method) => (
              <div key={method.id} className="flex items-center space-x-3">
                <RadioGroupItem value={method.id} id={method.id} />
                <Label
                  htmlFor={method.id}
                  className="flex items-center gap-3 flex-1 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <SafeIcon name={method.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{method.name}</p>
                    {method.description && (
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    )}
                  </div>
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        {onConfirm && (
          <Button onClick={handleConfirm} className="w-full" size="lg">
            Continue to Payment
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
