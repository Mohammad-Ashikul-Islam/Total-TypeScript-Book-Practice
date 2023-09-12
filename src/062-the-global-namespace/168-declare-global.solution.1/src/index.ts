declare global {
  const DEBUG: {
    getState(): { id: string };
  };
}

const state = DEBUG.getState();

type test = Expect<Equal<typeof state, { id: string }>>;
