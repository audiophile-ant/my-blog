interface Props {
  className: string;
  props: [string, string][];
}

export default function styleChange({ className, props }: Props) {
  const bodyElement = window.document.querySelector?.(`[class^=${className}]`) as HTMLElement;
  const bodyStyle = bodyElement?.style
  for (const type of props) {
    bodyStyle.setProperty(type[0], type[1]);
  }
};