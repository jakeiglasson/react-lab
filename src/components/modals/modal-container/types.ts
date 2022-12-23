export type ModalContainerProps = {
  setShowModal: (v: boolean) => void;
  children: React.ReactNode;
  /**
   * {image: 'default'} If set the modal default texture is set as the background image
   * or
   * {image: {filePath: string}} Set an image as the modal background
   * or
   * {color: string} set the modal background to a color
   */
  background?: { image?: 'default' | { filePath: string }; color?: string };
  /**
   * If set renders an overlay
   */
  overlayColor?: 'light' | 'dark' | `rgba(${string})`;
};
