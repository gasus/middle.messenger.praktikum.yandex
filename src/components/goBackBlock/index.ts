import addButtonCircleArrow from '../buttonCircleArrow/index';
import './style.less';

type Props = {
    link?: string;
};

export const goBackBlock = ({ link }: Props) => {
    const block = document.createElement('div');
    block.className = 'go-back-block';

    addButtonCircleArrow({ element: block, destination: 'left', link: link || '/' });

    return block;
};