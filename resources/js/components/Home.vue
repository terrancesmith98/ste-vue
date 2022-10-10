<template>
    <div class="p-3 mb-5 mh-75 container-fluid">
        <div class="row">
            <h1 vScroll="200" class="text-center">Welcome!</h1>
            <div class="col-lg-12">
                <div class="container">
                    <div class="primary-logo mx-auto">
                        <img :src="mainLogoSrc" />
                    </div>
                    <p class="intro">
                        Strength Through Education is a 501c3 charity that
                        supports US Armed Forces by empowering active-duty
                        service members with free and confidential educational
                        resources and career coaching to help them navigate
                        administrative issues; this can increase retention,
                        reduce sexual assault, and reduce military suicide.
                    </p>
                </div>
            </div>
        </div>
        <div class="row red p-3">
            <div class="col-lg-6 col-md-12">
                <h2 class="text-center">Our Mission</h2>
                <p class="lead">
                    Arming our warriors for mission success through guided
                    education and career coaching.
                </p>
            </div>
            <div class="col-lg-6 col-md-12">
                <h2 class="text-center">Our Vision</h2>
                <p class="lead">
                    Our armed forces are strengthened as all service members
                    have access to resources that empower them to achieve
                    mission and career success.
                </p>
            </div>
        </div>
        <div class="row">
            <hero-spotlights></hero-spotlights>
        </div>
        <div class="row">
            <div class="statements-container p-5 background-dark">
                <h2 class="text-center">Statements of Support</h2>
                <support-statements></support-statements>
            </div>
        </div>

        <div class="row p-5">
            <h2 class="sponsorship-heading text-center">
                2022 Annual Private Sponsorship Options
            </h2>
        </div>
        <div class="row">
            <div class="sponsorship-level col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h3>Warrior</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="bg-success text-light text-center p-2">
                            $500 - $1199 Annual or Minimum $42/Month
                        </h4>
                        <ul>
                            <li>Listed as Sponsor on StrengthThroughEdu.org</li>
                            <li>Thank you letter</li>
                            <li>Social Media Post</li>
                            <li>"Hero Spotlight" 1/4 Page</li>
                            <li>Invitation to all events</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sponsorship-level col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h3>Squad</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="bg-success text-light text-center p-2">
                            $1200 - $2399 Annual or Minimum $100/Month
                        </h4>
                        <ul>
                            <li>Listed as Sponsor on StrengthThroughEdu.org</li>
                            <li>Thank you letter</li>
                            <li>Social Media Post</li>
                            <li>"Hero Spotlight" 1/2 Page</li>
                            <li>Annual Swag Package</li>
                            <li>Invitation to all events</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sponsorship-level col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h3>Platoon</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="bg-success text-light text-center p-2">
                            $2400 - $5000 Annual or Minimum $200/Month
                        </h4>
                        <ul>
                            <li>Listed as Sponsor on StrengthThroughEdu.org</li>
                            <li>Thank you letter</li>
                            <li>Social Media Post</li>
                            <li>"Hero Spotlight" Full Page</li>
                            <li>3 Annual Swag Packages</li>
                            <li>VIP Access to all events</li>
                            <li>
                                Time with Executive Director or Director of
                                Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row p-5">
            <h2 class="sponsorship-heading text-center">
                2022 Annual Corporate Sponsorship Options
            </h2>
        </div>

        <div class="row">
            <div class="sponsorship-level col-lg-4">
                <div class="card corporate">
                    <div class="card-header">
                        <h3>Company</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="bg-success text-light text-center p-2">
                            $5000+
                        </h4>
                        <ul>
                            <li>
                                Corporate Logo and Listed as Sponsor on
                                StrengthThroughEdu.org
                            </li>
                            <li>6 Social Media Posts</li>
                            <li>Access to all events</li>
                        </ul>
                        <p class="text-center">(Pick 1)</p>
                        <ul>
                            <li>Signage at all events</li>
                            <li>10x10 Booth Space at events</li>
                            <li>Opportunity to address attendees at event</li>
                            <li>
                                Time with Executive Director or Director of
                                Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sponsorship-level col-lg-4">
                <div class="card corporate">
                    <div class="card-header">
                        <h3>Battalion</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="bg-success text-light text-center p-2">
                            $10,000+
                        </h4>
                        <ul>
                            <li>
                                Corporate Logo and Listed as Sponsor on
                                StrengthThroughEdu.org
                            </li>
                            <li>12 Social Media Posts</li>
                            <li>VIP Access to all events</li>
                        </ul>
                        <p class="text-center">(Pick 2)</p>
                        <ul>
                            <li>Signage at all events</li>
                            <li>10x10 Booth Space at events</li>
                            <li>Opportunity to address attendees at event</li>
                            <li>
                                Time with Executive Director or Director of
                                Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="sponsorship-level col-lg-4">
                <div class="card corporate">
                    <div class="card-header">
                        <h3>Brigade</h3>
                    </div>
                    <div class="card-body">
                        <h4 class="bg-success text-light text-center p-2">
                            $20,000+
                        </h4>
                        <ul>
                            <li>
                                Corporate Logo and Listed as Sponsor on
                                StrengthThroughEdu.org
                            </li>
                            <li>12 Social Media Posts</li>
                            <li>Access to all events</li>
                        </ul>
                        <p class="text-center">(Pick 3)</p>
                        <ul>
                            <li>Signage at all events</li>
                            <li>10x10 Booth Space at events</li>
                            <li>Opportunity to address attendees at event</li>
                            <li>
                                Time with Executive Director or Director of
                                Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import SupportStatements from "./SupportStatements.vue";
import HeroSpotlights from "./HeroSpotlights.vue";
import vScroll from "../directives/vScroll";
export default {
    data() {
        return {
            mainLogoSrc: "/images/ste-logo-final.png",
        };
    },
    computed: {
        ...mapState(["teamMembers", "supportStatements", "heroSpotlights"]),
    },
    components: {
        SupportStatements,
        HeroSpotlights,
    },
};
</script>

<style lang="scss">
@import "../../scss/utilities/variables.scss";
.intro {
    font-size: 1.2em;
    padding: 1em;
    max-width: 1200px;
}
.red {
    background: $secondary-color;
    color: whitesmoke;
    h2 {
        color: whitesmoke;
    }
    p.lead {
        padding: 1.5em;
        text-align: center;
    }
}
.primary-logo {
    display: flex;
    justify-content: center;
    img {
        max-width: 100%;
    }
}

.sponsorship-heading {
    font-size: 2em;
    padding: 0.25em 0.5em;
    background: $secondary-color;
    color: whitesmoke;
}
.sponsorship-level {
    display: flex;
    align-items: center;
    flex-direction: column;
    .card {
        display: grid;
        grid-template-rows: 60px 350px;
        margin: 0.5em;
        min-width: 275px;
        .card-header {
            background: $primary-color;
            color: whitesmoke;
            text-align: center;
        }
        &.corporate {
            grid-template-rows: 60px 500px;
        }
    }
}
</style>
