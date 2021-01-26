import { Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import useHashTagCandidates from '../../../hooks/useHashTagCandidates';

interface HashTagCanListProps{
    hashTag:string,
    setHashTag: (i:string) => void
}

const HashTagCandidateList:React.FC<HashTagCanListProps> = ({hashTag, setHashTag}) => {

    const {candidates, onFetchHashTagCandidates, setCandidates} = useHashTagCandidates();
    useEffect(()=>{
        let dat = hashTag.split(' ');
        if(dat[dat.length-1].charAt(0) == '#'){
            onFetchHashTagCandidates(dat[dat.length-1].substr(1, dat[dat.length-1].length));
        }else if(hashTag.length == 0) {
            setCandidates([]);
        }
    }, [hashTag])
    const chooseHashTag = (i:string) => {
        let dat = hashTag.split(' ');
        if(dat.length > 1){
            dat.pop();
            setHashTag(dat+ " #"+i+" ")
        }else{
            setHashTag("#"+i+" ")
        }
        setCandidates([]);
    }
    return (
    <StyledHashTagCandidateList>
        {
            candidates.map((i)=>(
                <HashTagCandidate onClick={()=>{chooseHashTag(i)}}><Typography variant="subtitle1" color="secondary" gutterBottom>{i}</Typography></HashTagCandidate>
            ))
        }

    </StyledHashTagCandidateList>
    )
}

const StyledHashTagCandidateList = styled.div`
position:absolute;
width:100%;
display:flex;
flex-direction:column;
align-items:stretch;
top:100%;
background-color:${props => props.theme.palette.primary.dark};
z-index:1;
`

const HashTagCandidate = styled.div`
&:hover{
    background-color:${props => props.theme.palette.primary.main};
    cursor:pointer;
}
border: 1px solid ${props => props.theme.palette.secondary.main};
border-radius:5px;
box-sizing:border-box;
padding:0.1rem;

`


export default HashTagCandidateList;