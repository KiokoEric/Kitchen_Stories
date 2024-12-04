declare namespace JSX {
    interface IntrinsicElements {
        'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        color?: string;
        size?: string;
    };
    }
}
