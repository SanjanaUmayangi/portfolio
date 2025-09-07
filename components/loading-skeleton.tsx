//shimmering loading animation 
export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gradient-to-r from-blue-800/20 to-purple-800/20 rounded-lg ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-shimmer"></div>
    </div>
  )
}
 