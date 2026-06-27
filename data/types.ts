export type Agent = {
  id: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  avatarSrc?: string;
};

export type MessageKind = "user" | "agent" | "moderator";

export type BoardMessage = {
  id: string;
  kind: MessageKind;
  agent: Agent;
  status: string;
  confidence: number;
  previousConfidence?: number;
  timestamp?: string;
  replyingTo?: string;
  changedMind?: boolean;
  revisionReason?: string;
  body: string;
};

export type DashboardMetrics = {
  noveltyScore: number;
  agreementScore: number;
  evidenceScore: number;
  confidenceScore: number;
  estimatedCost: string;
  currentRound: number;
  totalRounds: number;
  recommendation: "Continue" | "Stop";
  trends: {
    novelty: number;
    agreement: number;
    evidence: number;
    confidence: number;
  };
};

export type ModeratorSummary = {
  recommendation: "Continue" | "Stop";
  reason: string;
  finalSummary: string;
  remainingUncertainty: string;
  nextAction: string;
};
