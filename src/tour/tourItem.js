/* 정보입력 */

const TourItem = ({article}) => {
    const {
        MAIN_TITLE, /* 콘텐츠명 */
        TITLE, /* 제목 */
        HOMEPAGE_URL, /* 홈페이지 */
        MAIN_IMG_NORMAL, /* 이미지url */
        ADDR1, /* 주소 */

        USAGE_DAY, /* 운영일 */
        HLDY_INFO, /* 휴무일 */
        USAGE_DAY_WEEK_AND_TIME, /* 운영 시간 */
        USAGE_AMOUNT, /* 이용요금 */
        ITEMCNTNTS /* 상세내용 */
    } = article;
    return (
        <div className="item">
            <div className="img">
                <img src={MAIN_IMG_NORMAL} alt={TITLE} />
                <div className="right">
                    <div className="title">
                        <strong>{MAIN_TITLE}</strong>
                        <h4>{TITLE}</h4>
                    </div> {/* .title end */}
                    <div className="info">
                        <p>{ADDR1}</p>
                        <span>{USAGE_DAY}</span>
                        <span>{HLDY_INFO}</span>
                        <span>{USAGE_DAY_WEEK_AND_TIME}</span>
                        <strong>{USAGE_AMOUNT}</strong>
                    </div> {/* .info end */}
                    {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">바로가기</a>}
                </div> {/* .right end */}
            </div>
            <p>{ITEMCNTNTS}</p>
            <span>더보기</span>
            <img src={MAIN_IMG_NORMAL} alt={TITLE} />
            


            {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}


        </div> /* .item end */
    )
}

export default TourItem;