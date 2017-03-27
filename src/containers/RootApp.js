import { connect} from 'react-redux';
import Page from '../components/Page';

const mapStateToProps = (count) => {

    return {value: count};
};
const mapDispatchToProps = (dispatch) => {

    return {
        onDecrement: () => {
            dispatch({type: 'DECREMENT'})
        },
        onIncrement: () => {
            dispatch({type: 'INCREMENT'})
        }
    };
};



//状态和属性的映射
const RootApp = connect(mapStateToProps, mapDispatchToProps)(Page);

export default RootApp;