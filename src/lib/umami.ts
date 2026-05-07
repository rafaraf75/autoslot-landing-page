export type UmamiEventData = Record<
  string,
  string | number | boolean | null | undefined
>;

type UmamiTracker = {
  track: (eventName: string, eventData?: UmamiEventData) => void;
};

export function trackUmamiEvent(
  eventName: string,
  eventData?: UmamiEventData,
) {
  if (typeof window === "undefined") {
    return;
  }

  const umami = (window as Window & { umami?: UmamiTracker }).umami;

  if (!umami?.track) {
    return;
  }

  umami.track(eventName, eventData);
}
