export interface Button {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}