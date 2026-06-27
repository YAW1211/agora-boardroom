export type Agent = {
  id: string;
  name: string;
  role: string;
  initials: string;
  color: string;
};

export type MessageKind = "user" | "agent" | "moderator";

export type BoardMessage = {
  id: string;
  kind: MessageKind;
  agent: Agent;
  status: string;
  confidence: number;
  replyingTo?: string;
  changedMind?: boolean;
  body: string;
};

export type DashboardMetrics = {
  noveltyScore: number;
  agreementScore: number;
  evidenceScore: number;
  confidenceScore: number;
  estimatedCost: string;
  currentRound: number;
  recommendation: "Continue" | "Stop";
};

export type ModeratorSummary = {
  recommendation: "Continue" | "Stop";
  reason: string;
  finalSummary: string;
  remainingUncertainty: string;
  nextAction: string;
};
