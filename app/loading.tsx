"use client"

import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <CircularProgress />
    </main>
  );
}