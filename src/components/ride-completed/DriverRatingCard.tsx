
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import SafeIcon from '@/components/common/SafeIcon'

interface DriverRatingCardProps {
  driverName: string
  rating: number
  onRatingChange: (rating: number) => void
  feedback: string
  onFeedbackChange: (feedback: string) => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function DriverRatingCard({
  driverName,
  rating,
  onRatingChange,
  feedback,
  onFeedbackChange,
  onSubmit,
  isSubmitting
}: DriverRatingCardProps) {
  const handleStarClick = (star: number) => {
    onRatingChange(rating === star ? 0 : star)
  }

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Rate Your Experience</CardTitle>
        <CardDescription>Help us improve by rating {driverName}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Star Rating */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleStarClick(star)}
              className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
              aria-label={`Rate ${star} stars`}
            >
              <SafeIcon
                name="Star"
                size={32}
                className={`transition-colors ${
                  star <= rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
          ))}
        </div>

        {rating > 0 && (
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </p>
          </div>
        )}

        {/* Feedback Textarea */}
        <div className="space-y-2">
          <label htmlFor="feedback" className="text-sm font-medium">
            Additional Feedback (Optional)
          </label>
          <Textarea
            id="feedback"
            placeholder="Share your experience with this ride..."
            value={feedback}
            onChange={(e) => onFeedbackChange(e.target.value)}
            className="resize-none"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={onSubmit}
          disabled={rating === 0 || isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <SafeIcon name="Send" size={18} className="mr-2" />
              Submit Rating
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
