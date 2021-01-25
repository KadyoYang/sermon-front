export interface QuestionType{
    id:number
    title:string
    content:string
    createdDate: string
    accountId:number
    nickname:string
    status: string
    answersSize: number
    viewCount:number
}

export interface PagingType{
    pageNumber:number
    pageSize:number
}

export interface AnswerType{
    id:number
    title:string
    content:string
    createdDate:string
    accountId:number
    questionId:number
    adopted:boolean
    star:number
    nickname:string
}


/*
    private Long id;

    private String title;
    private String content;
    private Date createdDate;

    private Long accountId;
    private Long questionId;

    private boolean isAdopted;

    private Long star;


*/

/* 
    private Long id;
    private String title;
    private String content;
    private Date createdDate;
    private Long accountId;
    private QuestionStatusType status;
    private List<AnswerDTO> answers = new ArrayList<AnswerDTO>();
*/