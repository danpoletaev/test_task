import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    background_image_cnt: {
        width: '100%',
        background: '#ffd900',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: "$opacity .5s ease-in-out"
    },

    background_image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },

    card_container: {
        animation: "$fadeIn .5s ease-in-out"
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
            transform: "translateX(60rem)"
        },
        "100%": {
            opacity: 1,
            transform: "translateX(0)"
        }
    },
    "@keyframes opacity": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        }
    },

    selector: {
        animation: "$fadeIn .2s ease-in-out"
    }
});

export {useStyles}
