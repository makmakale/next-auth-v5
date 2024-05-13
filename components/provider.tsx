"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export default function Provider({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
