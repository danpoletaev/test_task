import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '10px',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    paper_img: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid gray',
        borderRadius: '2px',
        width: '10rem',
        height: '10rem',
        marginTop: '15px'
    },
    name: {
        fontSize: '2rem',
        marginTop: 10,
        fontFamily: 'Pokemon-Hollow',
        marginBottom: 10
    },
    stats_text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 5,
        width: 55
    },
    stats_number: {
        fontSize: 14,
    }
});

export {useStyles}
