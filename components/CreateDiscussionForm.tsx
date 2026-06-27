"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AgentAvatar } from "@/components/AgentAvatar";
import { aiMembers, discussionModes, discussionStyles } from "@/data/mock-data";

export function CreateDiscussionForm() {
  const router = useRouter();
  const [members, setMembers] = useState<string[]>(aiMembers.map((member) => member.id));
  const [mode, setMode] = useState(discussionModes[0]);
  const [style, setStyle] = useState(discussionStyles[0]);

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
          <GlassSelect
            label="Discussion mode"
            name="mode"
            options={discussionModes}
            value={mode}
            onChange={setMode}
          />

          <GlassSelect
            label="Discussion style"
            name="style"
            options={discussionStyles}
            value={style}
            onChange={setStyle}
          />
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
                    <AgentAvatar agent={member} size="md" />
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

function GlassSelect({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <label className="relative grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`group flex w-full items-center justify-between rounded-xl border bg-slate-950/65 px-4 py-3 text-left text-white outline-none transition ${
          open ? "border-cyan-200/50 shadow-[0_0_0_3px_rgba(103,232,249,0.08)]" : "border-white/10"
        }`}
        aria-expanded={open}
      >
        <span>{value}</span>
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.055] transition group-hover:border-cyan-200/25">
          <span
            className={`h-2 w-2 border-b-2 border-r-2 border-cyan-100/80 transition ${
              open ? "-translate-y-0.5 rotate-[225deg]" : "-translate-y-0.5 rotate-45"
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-white/10 bg-slate-950/95 p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.46)] backdrop-blur-xl">
          {options.map((option) => {
            const selected = option === value;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  selected
                    ? "bg-cyan-200/14 text-cyan-50"
                    : "text-slate-300 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                <span>{option}</span>
                {selected && <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />}
              </button>
            );
          })}
        </div>
      )}
    </label>
  );
}
