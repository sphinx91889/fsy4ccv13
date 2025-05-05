export default function Rules() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Rules & Guidelines</h1>

        {/* General Rules */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">General Conference Rules</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <p>All participants must be registered and wear their conference badges at all times.</p>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <p>Respect and courtesy must be shown to all participants, volunteers, and staff.</p>
            </li>
            {/* Add more rules */}
          </ul>
        </div>

        {/* Decorum Guidelines */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Decorum Guidelines</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              As representatives of Christ, all participants are expected to maintain appropriate behavior and dress throughout the conference.
            </p>
            {/* Add more guidelines */}
          </div>
        </div>
      </div>
    </div>
  )
}
