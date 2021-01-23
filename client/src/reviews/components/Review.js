import React, { useState, useEffect, useRef, forwardRef } from 'react';
import StarRating from './StarRating';
import { ListGroup, Card } from 'react-bootstrap';

const testtext = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius
odio cumque excepturi libero exercitationem.`;

const Review = forwardRef(
  (
    {
      text,
      id,
      sorting,
      rating,
      response,
      helpfulness,
      recommend,
      name,
      date,
      body
    },
    ref
  ) => {
    const [width, updateWidth] = useState(0);
    const [title, setTitle] = useState(text);
    const [subTitle, setSubTitle] = useState(text);

    const handleResize = () => {
      if (ref.current) {
        updateWidth(ref.current.offsetWidth);
      }
    };

    useEffect(() => {
      if (text) {
        setTitle(text.substring(0, Math.floor(ref.current.offsetWidth) / 8));
        setSubTitle(
          '...' +
            text.substring(Math.floor(ref.current.offsetWidth) / 8, text.length)
        );
      }
      // console.log(ref.current.offsetWidth, width);
    }, [ref.current, width]);

    window.addEventListener('resize', handleResize);

    return (
      <div
        ref={ref}
        className={sorting ? 'review__card_sorting mb-2' : 'review__card mb-3'}
      >
        <Card>
          <ListGroup className='review__listgroup'>
            <ListGroup.Item className='d-inline-block py-0 px-1'>
              <Card>
                <div className='review__header d-flex justify-content-between '>
                  <StarRating value={rating} type={'read-only'} />
                  <p className='review__date text-end text-muted'>
                    {date.startsWith('2021') && (
                      <i
                        className='review__badge fa fa-check-circle fa-lg'
                        aria-hidden='true'
                      ></i>
                    )}
                    {name}, {date.substring(0, 10)}
                  </p>
                </div>
                <div className='review__title-container'>
                  <strong className='review__title-first text-dark my-1'>
                    {title}
                    {subTitle.length > 3 && '...'}
                  </strong>
                  <div className='review__title review__text'>
                    {subTitle.length > 3 && subTitle}
                  </div>
                </div>

                <p className='review__body'>{body}</p>

                {recommend && (
                  <div className='review__recommended'>
                    <i
                      className='review__check fa fa-check'
                      aria-hidden='true'
                    ></i>{' '}
                    <span className={'review__text'}>
                      I recommend this product
                    </span>
                  </div>
                )}

                {response && (
                  <div className='review__response'>
                    <strong className='text-dark review__response-text'>
                      Response:{' '}
                    </strong>
                    <p className='text review__text'>{response}</p>
                  </div>
                )}

                <div className='review__meta'>
                  <span className={'review__text-sm fs-0'}>Helpful?</span>
                  <span className={'review__text-sm-underline'}>Yes</span>
                  <span
                    className={'review__text-sm-light'}
                  >{`(${helpfulness})`}</span>
                  <span className={'review__vertical-bar'}>&#124;</span>
                  <span className={'review__text-sm-underline'}>Report</span>
                </div>

                <hr className='review__line' />
              </Card>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
);
export default Review;
