export default function (context) {
  // Redirect to dashboard if user is authenticated
  if (context.store.state.auth.user === null) {
    context.app.router.push('dashboard')
  }
}
