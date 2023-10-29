import { useState } from 'react';
import styles from '@/styles/write.module.css'

export default function WriteLayout() {
    const userName = '오윤석';
    const date = '2023.10.25';

    const [imagePreview, setImagePreview] = useState(null);
    const [blocks, setBlocks] = useState([]);

    const addTextBlock = () => {
        setBlocks([...blocks, { type: 'text', content: '' }]);
    };

    const addImageBlock = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBlocks([...blocks, { type: 'image', content: reader.result }]);
            }
            reader.readAsDataURL(file);
        }
    };

    const removeBlock = (index) => {
        const newBlocks = [...blocks];
        newBlocks.splice(index, 1);
        setBlocks(newBlocks);
    }


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleImageDelete = () => {
        setImagePreview(null);
    }


    return (
        <>
            <div className='full'>
                <div className={`${styles.headerWrap} flexRow full`}>
                    <div className={`${styles.headingWrap} flex full`} >
                        <div className={`${styles.titleWrap} flex full`} >
                            <p>
                                게시글 작성 페이지
                            </p>
                        </div>
                        <div className={`${styles.authorWrap} full flexRow`} >
                            <div className={`${styles.authorBox} marginLeft flex`} >
                                <p>by {userName}</p>
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
                            <div className={`${styles.post} flex full`}>
                                <input type='text' placeholder='제목을 입력하세요.' className={`${styles.reply} full`} />
                                {blocks.map((block, index) => (
                                    <div key={index} className={`full`}>
                                        {block.type === 'text' ? (
                                            <div className={`${styles.textAreaContainer}`}>
                                                <textarea placeholder='텍스트를 입력하세요.' className={`${styles.reply} ${styles.contents} full`}></textarea>
                                                <div className={`${styles.deleteButton}`} onClick={() => removeBlock(index)}>삭제</div>
                                            </div>
                                        ) : (
                                            <div className={`${styles.imageContainer}`}>
                                                <img src={block.content} alt="Image" className={`${styles.imagePreview}`} />
                                                <div className={`${styles.deleteImgButton}`} onClick={() => removeBlock(index)}>삭제</div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div className={`${styles.addBlockContainer} full`}>
                                    <label className={`${styles.addBlockButton} flex`}>
                                        사진 추가
                                        <input type='file' onChange={addImageBlock} className={`${styles.fileInput}`} />
                                    </label>
                                    <button onClick={addTextBlock} className={`${styles.addBlockButton}`}>글 추가</button>
                                </div>

                                <div className={`${styles.radioWrap} flexRow full`}>
                                    <label className={`${styles.radioContainer} flexRow`}>
                                        <input type='radio' name='category' className={`${styles.radioHidden}`} />
                                        <span className={`${styles.radioLabel}`}>CVE</span>
                                    </label>
                                    <label className={`${styles.radioContainer} flexRow`}>
                                        <input type='radio' name='category' className={`${styles.radioHidden}`} />
                                        <span className={`${styles.radioLabel}`}>Reversing</span>
                                    </label>
                                    <label className={`${styles.radioContainer} flexRow`}>
                                        <input type='radio' name='category' className={`${styles.radioHidden}`} />
                                        <span className={`${styles.radioLabel}`}>Forensic</span>
                                    </label>
                                    <label className={`${styles.radioContainer} flexRow`}>
                                        <input type='radio' name='category' className={`${styles.radioHidden}`} />
                                        <span className={`${styles.radioLabel}`}>Malware</span>
                                    </label>
                                </div>
                                <input type='submit' className={`${styles.reply} ${styles.submit} full`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}