"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [userQuery, setUserQuery] = useState("");
  const [response, setResponse] = useState("");
  const [displayedQuery, setDisplayedQuery] = useState(""); // Holds the submitted query
  const [learningData, setLearningData] = useState({}); // Initialize empty on server

  useEffect(() => {
    // Load learning data from localStorage only on client-side
    const saved = localStorage.getItem("learningData");
    if (saved) {
      setLearningData(JSON.parse(saved));
    }
  }, []); // Empty dependency array ensures it runs once on mount

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

  const calculateSimilarity = (str1: string, str2: string) => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const lengthDiff = longer.length - shorter.length;
    if (lengthDiff > 4) return 0; // Allow up to 4 character differences
    let matches = 0;
    for (let i = 0; i < shorter.length; i++) {
      if (longer[i] === shorter[i] || (Math.abs(longer.charCodeAt(i) - shorter.charCodeAt(i)) <= 2)) matches++; // Allow more near-matches
    }
    return matches / longer.length;
  };

  const getGrokReply = (query: string) => {
    const queryLower = query.toLowerCase();
    const emotionalKeywords = ["worried", "stressed", "anxious", "overwhelmed", "anxous", "strong emotions"];
    const isEmotionalQuery = emotionalKeywords.some((keyword) =>
      queryLower.includes(keyword) || calculateSimilarity(queryLower, keyword) > 0.6
    );

    if (isEmotionalQuery && queryLower.includes("stressed")) {
      return "I see you’re feeling stressed. Based on the book's wisdom, I recommend trying Meditation and Breathwork to ground yourself, with journaling your feelings as a supportive step. Additionally, the closest practice for you might be exploring ";
    } else if (isEmotionalQuery && (queryLower.includes("recommend") || queryLower.includes("suggest"))) {
      return "I see you’re experiencing strong emotions. Based on the book's wisdom, I recommend journaling your feelings as a starting point. and try breathwork Additionally, the closest practice for you might be exploring ";
    } else if (isEmotionalQuery && queryLower.includes("help")) {
      return "I see you’re experiencing strong emotions. Based on the book's wisdom, I recommend journaling your feelings as a starting point. and try breathwork Additionally, the closest practice for you might be exploring ";
    } else if (isEmotionalQuery) { // Standalone emotional statements
      return "I see you’re experiencing strong emotions. Based on the book's wisdom, I recommend journaling your feelings as a starting point. and try breathwork Additionally, the closest practice for you might be exploring ";
    } else if (queryLower.includes("resonance")) {
      return "Resonance is the feeling of alignment between your inner and outer self, creating harmony in your life.";
    } else if (queryLower.includes("awareness")) {
      return "Awareness is the ability to observe your thoughts and emotions without judgment, leading to transformation.";
    } else if (queryLower.includes("existence")) {
      return "Existence goes beyond the physical, connecting you to a deeper, eternal dimension.";
    } else if (queryLower.includes("experience")) {
      return "Experience acts as a teacher and mirror, guiding you through life’s lessons.";
    } else if (queryLower.includes("present moment")) {
      return "The present moment is where life truly happens, the foundation of all actions.";
    } else if (queryLower.includes("mindfulness")) {
      return "Mindfulness is being aware and present in the moment, often through meditation.";
    } else if (queryLower.includes("self-reflection") || queryLower.includes("shadow work")) {
      return "Self-reflection and shadow work involve examining and integrating your hidden fears and strengths.";
    } else if (queryLower.includes("acceptance") && queryLower.includes("journey")) {
      return "Accepting your unique journey means honoring your path without comparing to others.";
    } else if (queryLower.includes("resonance") && queryLower.includes("achievement")) {
      return "Prioritizing Resonance over achievement focuses on inner alignment rather than external success.";
    } else if (queryLower.includes("presence")) {
      return "Presence is fully inhabiting the moment with intention and awareness.";
    } else if (queryLower.includes("acceptance")) {
      return "Acceptance is meeting life as it is, with openness and courage.";
    } else if (queryLower.includes("curiosity")) {
      return "Curiosity drives exploration and discovery, opening new perspectives.";
    } else if (queryLower.includes("compassion")) {
      return "Compassion is showing kindness and understanding to yourself and others.";
    } else if (queryLower.includes("authenticity")) {
      return "Authenticity means acting from awareness and alignment with your higher consciousness.";
    } else if (queryLower.includes("journaling")) {
      return "Journaling is a dialogue with yourself, helping you explore thoughts and feelings.";
    } else if (queryLower.includes("meditation") || queryLower.includes("breathwork")) {
      return "Meditation and breathwork ground you in the moment, fostering clarity.";
    } else if (queryLower.includes("compassionate reflection")) {
      return "Compassionate reflection is reviewing your life with gentle kindness.";
    } else if (queryLower.includes("nature")) {
      return "Connecting with nature helps you find presence and peace, resonating with the world.";
    }
    return "I’m here to help you explore Resonance. Could you ask about a specific topic from the 18 nodes?";
  };

  const alignResponse = (query: string, grokResponse: string) => {
    let alignedReply = grokResponse;
    const queryLower = query.toLowerCase();
    const isEmotionalQuery = ["worried", "stressed", "anxious", "overwhelmed", "anxous", "strong emotions"].some((keyword) =>
      queryLower.includes(keyword) || calculateSimilarity(queryLower, keyword) > 0.6
    );

    if (isEmotionalQuery && (queryLower.includes("suggest") || queryLower.includes("recommend") || queryLower.includes("help"))) {
      const queries = query.split(/[\n…]/).map(q => q.trim()).filter(q => q);
      let combinedReply = alignedReply;
      queries.forEach((q) => {
        const qLower = q.toLowerCase();
        const lastFourNodes = resonanceNodes.slice(14);
        let maxSimilarity = -1;
        let closestNode = "";
        lastFourNodes.forEach((node) => {
          const nodeTitle = node.split(":")[0].toLowerCase();
          let similarity = calculateSimilarity(qLower, nodeTitle);
          if (learningData[qLower]?.[nodeTitle]) {
            similarity += learningData[qLower][nodeTitle] * 0.1; // Boost by learned frequency
          }
          if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            closestNode = node;
          }
        });
        if (combinedReply === grokResponse) {
          combinedReply += closestNode ? `${closestNode.split(":")[0]} for further support.` : "one of the practices for further support.";
          combinedReply += " and deeper insight.";
          setLearningData((prev) => {
            const newData = {
              ...prev,
              [qLower]: {
                ...prev[qLower],
                [closestNode.split(":")[0].toLowerCase()]: (prev[qLower]?.[closestNode.split(":")[0].toLowerCase()] || 0) + 1,
              },
            };
            localStorage.setItem("learningData", JSON.stringify(newData));
            return newData;
          });
        }
      });
      alignedReply = combinedReply;
    } else if (isEmotionalQuery) {
      const lastFourNodes = resonanceNodes.slice(14);
      let maxSimilarity = -1;
      let closestNode = "";
      lastFourNodes.forEach((node) => {
        const nodeTitle = node.split(":")[0].toLowerCase();
        let similarity = calculateSimilarity(queryLower, nodeTitle);
        if (learningData[queryLower]?.[nodeTitle]) {
          similarity += learningData[queryLower][nodeTitle] * 0.1;
        }
        if (similarity > maxSimilarity) {
          maxSimilarity = similarity;
          closestNode = node;
        }
      });
      alignedReply += closestNode ? `${closestNode.split(":")[0]} for further support.` : "one of the practices for further support.";
      alignedReply += " and deeper insight.";
      setLearningData((prev) => {
        const newData = {
          ...prev,
          [queryLower]: {
            ...prev[queryLower],
            [closestNode.split(":")[0].toLowerCase()]: (prev[queryLower]?.[closestNode.split(":")[0].toLowerCase()] || 0) + 1,
          },
        };
        localStorage.setItem("learningData", JSON.stringify(newData));
        return newData;
      });
    } else if (!isEmotionalQuery) {
      const relevantNodes = [];
      resonanceNodes.forEach((node) => {
        const nodeTitle = node.split(":")[0].toLowerCase();
        if (
          grokResponse.toLowerCase().includes(nodeTitle) ||
          calculateSimilarity(grokResponse.toLowerCase(), nodeTitle) > 0.7
        ) {
          relevantNodes.push(node);
        }
      });
      if (relevantNodes.length > 0) {
        alignedReply = `Based on our concept of Resonance (${relevantNodes.join(", ")}), ${grokResponse}`;
      }
    }
    if (alignedReply === grokResponse && !isEmotionalQuery) {
      alignedReply = `${grokResponse} Consider exploring the 18 nodes for deeper insight.`;
    }
    return alignedReply;
  };

  const getResponse = () => {
    const grokReply = getGrokReply(userQuery);
    const finalReply = alignResponse(userQuery, grokReply);
    setResponse(finalReply);
    setDisplayedQuery(userQuery); // Store the submitted query
  };

  const askAgain = () => {
    setResponse("");
    setDisplayedQuery("");
    setUserQuery(""); // Clear only when asking again
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Ask About Resonance</h3>
        <input
          type="text"
          value={displayedQuery || userQuery} // Show submitted query until new input
          onChange={(e) => {
            setUserQuery(e.target.value); // Update userQuery only on change
            if (e.target.value) setDisplayedQuery(""); // Clear displayed query when typing
          }}
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
          <div className="mt-4">
            <p className="text-gray-700">{response}</p>
            <button
              onClick={askAgain}
              className="mt-2 text-blue-600 font-medium underline hover:text-blue-800"
            >
              What else can I help you with?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}