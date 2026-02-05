export default function NewsletterSignup() {
  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">The Five Stacks Monthly</h3>
      <p className="text-gray-600 mb-6">
        One email per month. One insight per stack. Practical sustainability for agricultural
        operations.
      </p>

      <form
        action="https://buttondown.com/api/emails/embed-subscribe/ecosystemsunited"
        method="post"
        target="popupwindow"
        className="flex gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="you@farm.com"
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-primary-dark transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-2">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
