import { Paginator, PageButton1, PageButton2, PageCounter } from '../styles/styles';

const Paginate = ({next, page, prev}) => {
    return (
    <Paginator>
        <PageButton1 
            style={page !== 0 ? {"opacity": "1"} : null}
            onClick={prev}
            onKeyDown={prev}>
                Previous
        </PageButton1>
        <PageButton2 
            style={page !== 26 ? {"opacity": "1"} : null} 
            onClick={next}>
                Next
        </PageButton2>
        <PageCounter>{page === 0 ? '1' : page + 1} / 27</PageCounter>
    </Paginator>
    )
}

export default Paginate;