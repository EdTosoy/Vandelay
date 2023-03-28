interface IonIconElement {
  name: string;
  size?: "small" | "large";
}

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement, IonIconElement>,
        HTMLElement
      >;
    }
  }
}
