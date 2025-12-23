import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Features extends Component {
    render () {

        let factsInfo = homedata.features
        let sectionHeadingInfo = factsInfo.sectionHeading
        let featureContent = factsInfo.singleFeature


        return     <section id="features" className="pt100 pb100" style={{backgroundColor: '#0a0a0a'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
                    <div className="section-title text-center mb60">
                        <h2 dangerouslySetInnerHTML={{__html: sectionHeadingInfo.title}} style={{color: '#ed4425'}}></h2>
                        <hr className="lines"/>
                        <p style={{color: '#ffffff'}}>{sectionHeadingInfo.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    featureContent.featurePart1.map( ( element, i ) => {
                        return(
                            <div key={i} className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" style={{
                                    backgroundColor: '#181818',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    height: '100%',
                                    border: '1px solid #333'
                                }}>
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="service-icon me-3" style={{
                                            minWidth: '50px',
                                            height: '50px',
                                            backgroundColor: '#ed4425',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '15px'
                                        }}>
                                            <i className={element.icon} style={{
                                                fontSize: '24px',
                                                color: '#ffffff'
                                            }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{
                                                color: '#ffffff',
                                                marginBottom: '10px',
                                                fontSize: '20px',
                                                fontWeight: '600'
                                            }}>{element.title}</h4>
                                        </div>
                                    </div>
                                    <p style={{
                                        color: '#cccccc',
                                        lineHeight: '1.6',
                                        marginBottom: '20px'
                                    }}>{element.desc}</p>
                                    <a href={element.btnUrl} style={{
                                        color: '#ed4425',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        transition: 'color 0.3s ease'
                                    }} 
                                    onMouseOver={(e) => e.target.style.color = '#ff6b4a'}
                                    onMouseOut={(e) => e.target.style.color = '#ed4425'}>
                                        {element.btnText} →
                                    </a>
                                </div>
                            </div>
                        )
                    } )
                }
                {
                    featureContent.featurePart2.map( ( element, i ) => {
                        return(
                            <div key={`part2-${i}`} className="col-lg-4 col-md-6 mb-4">
                                <div className="service-card" style={{
                                    backgroundColor: '#181818',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    height: '100%',
                                    border: '1px solid #333'
                                }}>
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="service-icon me-3" style={{
                                            minWidth: '50px',
                                            height: '50px',
                                            backgroundColor: '#ed4425',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '15px'
                                        }}>
                                            <i className={element.icon} style={{
                                                fontSize: '24px',
                                                color: '#ffffff'
                                            }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{
                                                color: '#ffffff',
                                                marginBottom: '10px',
                                                fontSize: '20px',
                                                fontWeight: '600'
                                            }}>{element.title}</h4>
                                        </div>
                                    </div>
                                    <p style={{
                                        color: '#cccccc',
                                        lineHeight: '1.6',
                                        marginBottom: '20px'
                                    }}>{element.desc}</p>
                                    <a href={element.btnUrl} style={{
                                        color: '#ed4425',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '14px',
                                        transition: 'color 0.3s ease'
                                    }} 
                                    onMouseOver={(e) => e.target.style.color = '#ff6b4a'}
                                    onMouseOut={(e) => e.target.style.color = '#ed4425'}>
                                        {element.btnText} →
                                    </a>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
    }
}


export default Features
