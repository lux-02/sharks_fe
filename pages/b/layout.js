import styles from '@/styles/layout.module.css'
import Image from 'next/image';

export default function BoardLayout() {
    const userName = '오윤석';
    let views = '1600';
    const category = '카테고리 테스트';
    const date = '2023.10.25';
    const title = "게시글 타이틀 테스트";
    const replyCount = 1;
    const replyDate = '2023.10.25';
    const reply = "댓글 테스트";

    const summary = "더보기 게시물 요약 테스트";

    if (views >= 1000) {
        views /= 1000;
        views += ('k');
    }

    return (
        <>
            <div className='full'>
                <div className={`${styles.headerWrap} flex full`} style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${'/test.jpg'})`,
                    backgroundPosition: 'center', backgroundSize: 'cover',
                }}>
                    <div className={`${styles.categoryWrap} flexRow full`} >
                        <div className={`${styles.categoryBox} marginLeft`}>
                            <p>{category}</p>
                        </div>
                    </div>
                    <div className={`${styles.headingWrap} flex full`} >
                        <div className={`${styles.titleWrap} flex full`} >
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className={`${styles.authorWrap} full flexRow`} >
                            <div className={`${styles.authorBox} marginLeft flex`} >
                                <p>by {userName}</p>
                            </div>
                            <div className={`${styles.authorBox} flexRow`} >
                                <Image src={'/icons/views.svg'} width={8} height={8} />
                                <p>{views} views</p>
                            </div>
                            <div className={`${styles.dateBox} flexRow`} >
                                <p>📅 {date}</p>
                            </div>
                        </div>
                    </div>
                </div >
                <div className={`${styles.postWrap} flex full`}>
                    <div className={`${styles.postBox} flex`}>
                        <div className={`${styles.post} full`}>
                            <h1>5 Efficient Rules How to Organize Your Working Place</h1>
                            <br />
                            <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                            <br />
                            <div className={`${styles.fitImg} full`}>
                                <Image
                                    layout="fill"
                                    objectFit="contain"
                                    alt="testImg"
                                    src="/test.jpg"
                                />
                            </div>
                            <br />
                            <h2>Faucibus nullam luctus felis pretium donec</h2>
                            <br />
                            <p>Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis donec cras ultricies. Eros vivamus enim nec nulla semper imperdiet aenean montes dictum porttitor metus.</p>
                        </div>
                    </div>
                    <div className={`${styles.profileWrap} flex full`}>
                        <div className={`${styles.profileCard} flex`}>
                            <div className={`${styles.profileCircleWrap}`}>
                                <div className={`${styles.profileCircle}`} />
                            </div>
                            <div className={`${styles.profileBox} flex full`}>
                                <div className={`${styles.profileName} full flex`}>
                                    {userName}
                                </div>
                                <div className={`${styles.profileExp} full flex`}>
                                    <p>프로필 메시지 테스트입니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.moveWrap} flex full`}>
                        <div className={`${styles.moveBoxWrap} flexRow`}>
                            <div className={`${styles.moveBox} flexRow`}>
                                <Image src={'/icons/prev.svg'} width={16} height={16} />
                                <p>이전 게시글</p>
                            </div>
                            <div className={`${styles.moveBox} flexRow`}>
                                <p>다음 게시글</p>
                                <Image src={'/icons/next.svg'} width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.replyWrap} flex full`}>
                        <div className={`${styles.replyCount} flex full`}>
                            <p>{replyCount}개의 댓글</p>
                        </div>
                        <input type='text' placeholder='댓글을 작성하세요' className={`${styles.reply} full`} />
                        <div className={`${styles.replyBox} flex full`}>
                            <div className={`${styles.replyCard} flexRow full`}>
                                <div className={`${styles.profileCircleWrap}`}>
                                    <div className={`${styles.profileCircle}`} />
                                </div>
                                <div className={`${styles.profileReplyBox}`}>
                                    <div className={`${styles.replyBox} flexRow full`}>
                                        <p className={`${styles.replyName}`}>{userName}</p>
                                        <p className={`${styles.replyDate}`}>{replyDate}</p>
                                    </div>
                                    <p className={`${styles.replyContent}`}>{reply}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.allPostsWrap} full`}>
                        <p className={`${styles.allPostsTitle} full`}>All Blog Posts</p>
                        <div className={`${styles.postsWrap} flex full`}>
                            <div className={`${styles.postsList} flexRow full`}>
                                <div className={`${styles.postsBox} flex full`}>
                                    <Image className={`${styles.moreImage} full`} src={'/test.jpg'} width={16} height={16} />
                                    <p className={`${styles.moreDate} full`}>{date}</p>
                                    <p className={`${styles.moreTitle} full`}>{title}</p>
                                    <p className={`${styles.moreSummary} full`}>{summary}</p>
                                    <div className={`${styles.moreCategoryBox}`}>
                                        <p>{category}</p>
                                    </div>
                                </div>
                                <div className={`${styles.postsBox} flex full`}>
                                    <Image className={`${styles.moreImage} full`} src={'/test.jpg'} width={16} height={16} />
                                    <p className={`${styles.moreDate} full`}>{date}</p>
                                    <p className={`${styles.moreTitle} full`}>{title}</p>
                                    <p className={`${styles.moreSummary} full`}>{summary}</p>
                                    <div className={`${styles.moreCategoryBox} full`}>
                                        <p>{category}</p>
                                    </div>
                                </div>
                                <div className={`${styles.postsBox} flex full`}>
                                    <Image className={`${styles.moreImage} full`} src={'/test.jpg'} width={16} height={16} />
                                    <p className={`${styles.moreDate} full`}>{date}</p>
                                    <p className={`${styles.moreTitle} full`}>{title}</p>
                                    <p className={`${styles.moreSummary} full`}>{summary}</p>
                                    <div className={`${styles.moreCategoryBox} full`}>
                                        <p>{category}</p>
                                    </div>
                                </div>
                                <div className={`${styles.postsBox} flex full`}>
                                    <Image className={`${styles.moreImage} full`} src={'/test.jpg'} width={16} height={16} />
                                    <p className={`${styles.moreDate} full`}>{date}</p>
                                    <p className={`${styles.moreTitle} full`}>{title}</p>
                                    <p className={`${styles.moreSummary} full`}>{summary}</p>
                                    <div className={`${styles.moreCategoryBox} full`}>
                                        <p>{category}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}