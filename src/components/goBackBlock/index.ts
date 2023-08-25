import addButtonCircleArrow from '../buttonCircleArrow/index';
import './style.less';

type Props = {
    onClick: () => void;
};

export const goBackBlock = ({ onClick }: Props) => {
    const block = document.createElement('div');
    block.className = 'go-back-block';

    addButtonCircleArrow({ element: block, destination: 'left', onClick: onClick });

    return block;
};