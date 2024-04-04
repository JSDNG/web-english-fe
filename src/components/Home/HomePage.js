import imageHomePage from "../../assets/image/imageHomepage.avif";

const HomePage = () => {
    return (
        <div className="homepage-container">
            <>
                <div>
                    <img src={imageHomePage} />
                </div>
                <div className="homepage-content">
                    <div className="titlea">Thẻ ghi nhớ kỹ thuật số và các công cụ học tốt nhất</div>
                    <div className="titleb">
                        Tham gia cùng hơn 60 triệu học sinh đang sử dụng các thẻ ghi nhớ dựa trên nền tảng khoa học, các
                        bài kiểm tra thử và lời giải chuyên gia của Quizlet để cải thiện điểm số và đạt được mục tiêu.
                    </div>
                    <div className="titlec">
                        <button className="btn-signup">Đăng ký miễn phí</button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default HomePage;
