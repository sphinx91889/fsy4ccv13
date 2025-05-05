export default function SpeakWord() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Speak a Word</h1>
        
        <div className="space-y-12">
          {/* Purpose */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">🎯</span>Purpose
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Encourage excellence in public speaking among youth</li>
              <li>Help students develop confidence, clarity, and effectiveness in speech</li>
              <li>Promote persuasive speaking without relying on modern technology</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">👥</span>Participant Categories
            </h2>
            <p className="font-semibold mb-2">Age groups:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>8–10 years old</li>
              <li>11–13 years old</li>
              <li>14–18 years old</li>
            </ul>
            <p className="text-gray-700">Separate rooms and judging for young men and young ladies.</p>
          </div>

          {/* Speech Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">📜</span>Speech Rules
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Speech topic must relate to the conference theme</li>
              <li>Time limit: 3–6 minutes</li>
              <li>Penalties for time violations:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>1–30 sec over/under = –2 points</li>
                  <li>31–60 sec = –4 points</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Scoring */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">🔍</span>Scoring Breakdown
            </h2>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Personal Qualities (20 pts):</span> Poise, personality, appearance, attitude</p>
              <p><span className="font-semibold">Material Organization (30 pts):</span> Biblical truths, theme adherence, value, logic</p>
              <p><span className="font-semibold">Delivery & Presentation (30 pts):</span> Voice, enunciation, pronunciation, sincerity</p>
              <p><span className="font-semibold">Overall Effectiveness (20 pts):</span> Appeal, impression, impact on audience</p>
            </div>
          </div>

          {/* Judging Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">🧑‍⚖️</span>Judging Rules
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>One judge per 3 participants required</li>
              <li>Judges must not know participants</li>
              <li>Independent scoring without discussion</li>
              <li>Results must remain confidential</li>
              <li>No post-event feedback allowed</li>
            </ul>
          </div>

          {/* Anonymity */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-3">🆔</span>Anonymity Guidelines
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>No self-identification by name or congregation</li>
              <li>Random number assigned for speaking order</li>
              <li>Self-identification results in 3-point penalty</li>
            </ul>
          </div>
        </div>

        {/* Registration Button */}
        <div className="mt-12 text-center">
          <a 
            href="https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67d8bd96b2c307b5767892ad.pdf"
            className="bg-black text-white px-8 py-4 rounded-full inline-block hover:bg-gray-800 transition text-lg"
          >
            Register for Speak a Word Competition
          </a>
        </div>
      </div>
    </div>
  )
}