export type ListComponentProps = {
  createSomething: () => void;
  readSomething: () => void;
  updateSomething: () => void;
  destroySomething: () => void;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
};
