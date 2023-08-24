import './style.less';

type Props = {
    label: string;
};

export const entryHeader = ({ label }: Props) => {
    const entryHeader = document.createElement('div');
    entryHeader.className = 'entry-header';
    entryHeader.textContent = label;

    return entryHeader;
};