import type { Agent, BoardMessage, DashboardMetrics, ModeratorSummary } from "@/data/types";

export const discussionModes = ["Startup", "Research", "Coding", "Study", "General"];

export const discussionStyles = [
  "Brainstorm",
  "Debate",
  "Peer Review",
  "Decision Making",
  "Research",
];

export const aiMembers: Agent[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    role: "Strategic synthesizer",
    initials: "CG",
    color: "#6ee7b7",
  },
  {
    id: "claude",
    name: "Claude",
    role: "Critical reasoning lead",
    initials: "CL",
    color: "#fbbf24",
  },
  {
    id: "gemini",
    name: "Gemini",
    role: "Evidence scout",
    initials: "GM",
    color: "#67e8f9",
  },
];

const userAgent: Agent = {
  id: "user",
  name: "You",
  role: "Founder",
  initials: "YO",
  color: "#f9a8d4",
};

const moderatorAgent: Agent = {
  id: "moderator",
  name: "Moderator",
  role: "Board chair",
  initials: "MO",
  color: "#c4b5fd",
};

export const mockDiscussion = {
  title: "Validate Agora's MVP positioning",
  question:
    "What should the first version of Agora include so users immediately feel the value of multiple AI agents thinking together?",
  messages: [
    {
      id: "m1",
      kind: "user",
      agent: userAgent,
      status: "Submitted",
      confidence: 100,
      body: "I want Agora to feel different from a chatbot. What should the MVP prove first: smarter answers, visible collaboration, or a better decision workflow?",
    },
    {
      id: "m2",
      kind: "agent",
      agent: aiMembers[0],
      status: "Thinking",
      confidence: 84,
      body: "The MVP should prove visible collaboration first. If users can see agents building on, challenging, and revising each other's points, the product earns its boardroom metaphor before it needs deeper automation.",
    },
    {
      id: "m3",
      kind: "agent",
      agent: aiMembers[1],
      status: "Reviewing",
      confidence: 78,
      replyingTo: "ChatGPT",
      body: "I partly disagree. Visible collaboration is necessary, but not sufficient. The experience should produce a clearer decision artifact than a normal chat: recommendation, uncertainties, and next action.",
    },
    {
      id: "m4",
      kind: "agent",
      agent: aiMembers[2],
      status: "Connecting evidence",
      confidence: 81,
      replyingTo: "Claude",
      body: "Claude's point matches the highest-value workflow: users do not just want more model output, they want friction reduced after the conversation. The dashboard should track agreement, evidence, and confidence so progress is legible.",
    },
    {
      id: "m5",
      kind: "agent",
      agent: aiMembers[0],
      status: "Revising",
      confidence: 89,
      replyingTo: "Gemini",
      changedMind: true,
      body: "I am updating my view: the core promise is visible collaboration that ends in a decision artifact. The MVP should make the agents' reasoning social, then convert the final state into a moderator recommendation.",
    },
    {
      id: "m6",
      kind: "moderator",
      agent: moderatorAgent,
      status: "Summarized",
      confidence: 91,
      body: "Summary: prioritize a polished discussion room with agent replies, changed-mind moments, confidence signals, and a moderator panel. Defer real APIs, authentication, and persistence until the boardroom loop feels unmistakably valuable.",
    },
  ] satisfies BoardMessage[],
};

export const mockDashboard: DashboardMetrics = {
  noveltyScore: 86,
  agreementScore: 73,
  evidenceScore: 68,
  confidenceScore: 82,
  estimatedCost: "$0.07",
  currentRound: 2,
  recommendation: "Continue",
};

export const mockModerator: ModeratorSummary = {
  recommendation: "Continue",
  reason:
    "The agents agree on the visible-collaboration loop, but pricing and retention assumptions need one more pass.",
  finalSummary:
    "Agora should launch as a boardroom-style discussion tool where agents respond to each other and produce a structured recommendation.",
  remainingUncertainty:
    "Whether users will pay for multi-agent visibility alone, or only when the output can be exported into their workflow.",
  nextAction:
    "Run a mock room with three startup strategy prompts and measure whether users trust the moderator summary.",
};
