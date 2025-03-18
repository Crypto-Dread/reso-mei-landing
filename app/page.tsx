"use client"; // Required for client-side interactivity in Next.js

import { useState } from "react";

export default function Home() {
  const [userQuery, setUserQuery] = useState("");
  const [response, setResponse] = useState("");

  const resonanceNodes = [
    "Life as a Journey of Resonance: Aligning inner and outer reactions for harmony.",
    "Awareness as the Key to Transformation: Observing thoughts and patterns without judgment.",
    "Existence Beyond the Physical: Transcending the material to connect with the eternal.",
    "Experience as a Guide: Learning from life’s highs and lows as a teacher and mirror.",
    "The Importance of the Present Moment: Living fully in the now, where all actions originate.",
    "Mindfulness: Embracing Presence: Noticing thoughts and surroundings to live consciously.",
    "Self-Reflection and Shadow Work: Examining and integrating hidden fears and strengths.",
    "Acceptance of My Unique Journey: Honoring your path without comparing to others.",
    "Resonance Over Achievement: Prioritizing inner alignment over external success.",
    "Presence: The Art of Being Here Now: Fully inhabiting the moment with intention.",
    "Acceptance: Embracing What Is: Meeting life with openness, not resistance.",
    "Curiosity: The Key to Discovery: Exploring with wonder to unlock new perspectives.",
    "Compassion: Embracing Ourselves and Others: Showing kindness and understanding to all.",
    "Authenticity: The Foundation of Resonance: Acting from awareness and higher consciousness.",
    "Journaling: Your Dialogue with Self: Exploring thoughts through honest self-reflection.",
    "Meditation and Breathwork: Cultivating Presence: Grounding in the moment for clarity.",
    "Compassionate Reflection: Cultivating Understanding: Reviewing life with gentle kindness.",
    "Connect with Nature: Resonating with the World: Finding presence and peace in nature."
  ];

  const alignResponse = (query: string, grokResponse: string) => {
    let alignedReply = grokResponse;
    resonanceNodes.forEach((node) => {
      if (grokResponse.toLowerCase().includes(node.split(":")[0].toLowerCase())) {
        alignedReply = `Based on my insight and your book's wisdom (${node}), ${grokResponse}`;
      }
    });
    if (alignedReply === grokResponse) {
      alignedReply = `This aligns with your journey of Resonance. ${grokResponse} Consider exploring your 18 nodes for deeper insight.`;
    }
    return alignedReply;
  };

  const getResponse = () => {
    // For now, manually input Grok's response (we'll automate later)
    const grokReply = "Mindfulness is being aware and present in the moment, often through meditation.";
    const finalReply = alignResponse(userQuery, grokReply);
    setResponse(finalReply);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Ask About Resonance</h3>
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder="Type your question..."
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={getResponse}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {response && (
          <p className="mt-4 text-gray-700">{response}</p>
        )}
      </div>
    </div>
  );
}