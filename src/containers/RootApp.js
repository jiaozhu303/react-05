import {connect} from 'react-redux';
import Page from '../components/Page';

const inc = () => {
    return (dispatch, getState) => {
        setTimeout(() => {
            return dispatch({type: 'INCREMENT'});
        }, 2000);
    };
};

const dnc = () => {
    return {type: 'DECREMENT'}
};

const mapStateToProps = (count) => {

    return {value: count};
};

const mapDispatchToProps = (dispatch) => {

    return {
        onDecrement: () => {
            dispatch(dnc())
        },
        onIncrement: () => {
            dispatch(inc())
        }
    };
};


//方法和属性的映射
const RootApp = connect(mapStateToProps, mapDispatchToProps)(Page);

export default RootApp;