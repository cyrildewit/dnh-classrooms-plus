export default function (context) {
  // Redirect to login if user is not authenticated
  if (context.store.state.auth.user === null) {
    context.app.router.push('login')
  }
}
