import { toast } from 'sonner'

type NotifyInput = {
  title: string
  message?: string
  level?: 'success' | 'error' | 'info'
  useBrowserNotification?: boolean
}

export async function notify({ title, message, level = 'info', useBrowserNotification }: NotifyInput) {
  const description = message

  if (level === 'success') toast.success(title, { description })
  else if (level === 'error') toast.error(title, { description })
  else toast(title, { description })

  if (!useBrowserNotification) return
  if (typeof window === 'undefined') return
  if (!('Notification' in window)) return

  try {
    const permission = Notification.permission === 'default'
      ? await Notification.requestPermission()
      : Notification.permission
    if (permission !== 'granted') return
    new Notification(title, { body: message || '' })
  } catch {
    // ignore
  }
}

