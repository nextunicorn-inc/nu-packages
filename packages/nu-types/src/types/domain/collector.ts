export type EventProperties = Record<string, string | number | boolean>;

export type ClickEventType = ({
  eventName,
  eventProperties,
}: {
  eventName: string;
  eventProperties?: EventProperties;
}) => void;
