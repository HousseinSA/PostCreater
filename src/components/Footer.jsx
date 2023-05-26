export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="py-2">
      <span>&copy;{date}</span>-<span>All Right Reserved - PostCreater.</span>
    </footer>
  )
}
