// function Text(props) {
//     const { text, className } = props;

//     return (
//         <h1 className={className}>{text}</h1>
//     );
// }

const Text = ({ text, className }) => {
    return (
        <h6 className={className}>
            {text}
        </h6>
    );
};

export default Text;
