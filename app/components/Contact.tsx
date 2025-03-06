export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 bg-white bg-opacity-10 rounded"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

