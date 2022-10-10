<template>
    <div class="container-fluid p-5">
        <div class="row p-3">
            <div class="col-lg-12">
                <h1>Get To Know Strength Through Education</h1>
                <p class="lead">
                    Strength Through Education was started after our founder,
                    Diane Mitchell, discovered the lack of understanding about
                    military policy and regulations among young active duty
                    service members. After assisting several soldiers she began
                    to develop a program that would expand the services that she
                    and her team could provide. Through her efforts, the
                    charity, Strength Through Education, was established in 2019
                    to provide coaching and information to those that serve in
                    our armed forces.
                </p>
            </div>
        </div>
        <div class="row p-3">
            <div class="col-lg-6 offset-lg-3 blue">
                <h2 class="text-light">How We Help</h2>
                <p class="mw-50">
                    Strength Through Education, Inc. is a not-for-profit charity
                    that was established October, 2019 based on a demonstrated
                    need for service members to have “one-stop” online access to
                    information that is both comprehensive and comprehensible
                    about policy and regulations.
                </p>
            </div>
        </div>
        <div class="row red-text p-3">
            <div class="col-lg-6">
                <h4>We Provide:</h4>
                <ul>
                    <li>one-on-one coaching and assistance</li>
                    <li>research and summary of the issue</li>
                    <li>education and guidance</li>
                    <li>100% confidentiality</li>
                </ul>
            </div>
            <div class="col-lg-6">
                <p>
                    Our organization currently works one-on-one with active duty
                    service members who are experiencing an administrative
                    concern. We listen to the problem, determine the applicable
                    policies and regulations, do research, summarize and
                    annotate helpful information, and provide these resources to
                    our client.
                </p>
                <p>
                    We can provide coaching and guidance to assist the service
                    member in asking questions and writing responses. We do not
                    provide legal advice; we help “translate” the legalese of
                    policy and regs. We do not communicate directly to command
                    or legal counsel; we educate and empower the service member
                    with information they need to handle their own career
                    concerns. All communication is 100% confidential.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <faqs></faqs>
            </div>
        </div>
        <div class="row p-3 mt-2">
            <div class="col-lg-12">
                <h3>Meet Our Team</h3>
                <team-members></team-members>
            </div>
        </div>
        <div class="row p-3 mt-2">
            <div class="col-lg-12">
                <h3>Our Military Advisory Committee</h3>
                <mac-members></mac-members>
            </div>
        </div>
    </div>
</template>

<script>
import OurTeam from "./OurTeam.vue";
import MacMembers from "./MacMembers.vue";
import Faqs from "./Faqs.vue";
export default {
    data() {
        return {};
    },
    components: {
        OurTeam,
        MacMembers,
        Faqs,
    },
};
</script>

<style lang="scss">
@import "../../scss/utilities/variables.scss";
.red-text {
    color: $secondary-color;
    border: 1px solid $secondary-color;
}
.blue {
    background: $primary-color;
    color: whitesmoke;
    padding: 1em;
}
</style>
