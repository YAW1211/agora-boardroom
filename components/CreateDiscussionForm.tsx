"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { aiMembers, discussionModes, discussionStyles } from "@/data/mock-data";

export function CreateDiscussionForm() {
  const router = useRouter();
  const [members, setMembers] = useState<string[]>(aiMembers.map((member) => member.id));

  function toggleMember(id: string) {
    setMembers((current) =>
      current.includes(id) ? current.filter((member) => member !== id) : [...current, id],
    );
  }

  return (
    <form
      className="glass-panel mx-auto max-w-4xl rounded-2xl p-5 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        router.push("/room");
      }}
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/75">
          Create Discussion
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
          Assemble your AI boardroom
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Pick the mode, members, and collaboration style. This MVP uses mock AI responses so the
          product flow stays fast and inspectable.
        </p>
      </div>

      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Discussion title</span>
          <input
            required
            name="title"
            defaultValue="Validate Agora's MVP positioning"
            className="rounded-xl border border-white/10 bg-slate-950/65 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/50"
            placeholder="Give this boardroom a title"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Main question</span>
          <textarea
            required
            name="question"
            rows={5}
            defaultValue="What should the first version of Agora include so users immediately feel the value of multiple AI agents thinking together?"
            className="resize-none rounded-xl border border-white/10 bg-slate-950/65 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/50"
            placeholder="What should the board discuss?"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-200">Discussion mode</span>
            <select className="rounded-xl border border-white/10 bg-slate-950/65 px-4 py-3 text-white outline-none transition focus:border-cyan-200/50">
              {discussionModes.map((mode) => (
                <option key={mode}>{mode}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-200">Discussion style</span>
            <select className="rounded-xl border border-white/10 bg-slate-950/65 px-4 py-3 text-white outline-none transition focus:border-cyan-200/50">
              {discussionStyles.map((style) => (
                <option key={style}>{style}</option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-slate-200">AI members</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {aiMembers.map((member) => {
              const selected = members.includes(member.id);
              return (
                <button
                  type="button"
                  key={member.id}
                  onClick={() => toggleMember(member.id)}
                  className={`rounded-xl border p-4 text-left transition ${
                    selected
                      ? "border-cyan-200/45 bg-cyan-200/12"
                      : "border-white/10 bg-slate-950/50 hover:border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-slate-950"
                      style={{ backgroundColor: member.color }}
                    >
                      {member.initials}
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{member.name}</span>
                      <span className="block text-xs text-slate-400">{member.role}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(34,211,238,0.22)] transition hover:bg-white"
      >
        Start boardroom
      </button>
    </form>
  );
}
