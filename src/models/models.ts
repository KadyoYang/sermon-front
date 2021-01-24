export interface QuestionType{
    id:number
    title:string
    content:string
    date: string
    accountId:number
    nickname:string
    status: string
    answersSize: number
}

export interface PagingType{
    pageNumber:number
    pageSize:number
}

/* 
    private Long id;
    private String title;
    private String content;
    private Date createdDate;
    private Long accountId;
    private QuestionStatusType status;
    private List<AnswerDTO> answers = new ArrayList<AnswerDTO>();
*/