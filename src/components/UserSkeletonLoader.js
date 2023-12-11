import { SkeletonLoader } from './SkeletonLoader'

export const UserSkeletonLoader = () => {
  return Array.from({ length: 10 }, (_, index) => (
    <SkeletonLoader key={index} />
  ))
}
