import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
import Footer from "../../IT17152938/JSX/Footer";
import ViewAssignment from "./ViewAssignment";

export default class AddAssignmentMain extends Component {
    render() {
        return (
            <div>
                <Navbarjsx/>
                <ImageSlide/>
                <ViewAssignment/>
                <Footer/>
            </div>
        );
    }


}