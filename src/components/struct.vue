<template>
    <svg width="1000" height="400" xmlns="http://www.w3.org/2000/svg">

        <g>
            <title>x-streaming</title>
            <template v-for="(publisher,i) in publishers">
                <template v-for="(p,index) in publisher">
                    <rect :fill="index!=0?'powderblue':'thistle'" :key="index+'r'+i" stroke="#000" :y="i*lineheight+yOffset"
                        :x="getPublisherAfterWidth(i,index)" height="33" :width="p.bbox.width+20" />
                    <text :ref="index+'t'+i" stroke-width="0" :key="index+'t'+i" :x="getPublisherAfterWidth(i,index)+10"
                        :y="i*lineheight+20+yOffset" fill="#000000" stroke="#000">{{p.label}}</text>
                    <line :key="index+'l'+i"  :stroke="p.pull?'wheat':'mediumaquamarine'" stroke-width="7"
                        :x1="getPublisherAfterWidth(i,index)+p.bbox.width+20" :y1="i*lineheight+yOffset+15"
                        :x2="getPublisherAfterWidth(i,index)+p.bbox.width+50" :y2="i*lineheight+yOffset+15"
                        v-if="index!=publisher.length-1">
                        <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
                    </line>
                    <path stroke-dasharray='10, 10, 5' :stroke="p.pull?'wheat':'mediumaquamarine'" fill="#fff" stroke-width="7" :d="getPath(i)"
                        :key="index+'p'+i">
                        <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
                    </path>
                </template>
            </template>
            <template v-for="(subscriber,i) in subscribers">
                <template v-for="(p,index) in subscriber">
                    <rect :fill="index==0?'powderblue':'thistle'" :key="index+'rs'+i" stroke="#000" :y="i*lineheight+yOffsetSub"
                        :x="getSubscriberAfterWidth(i,index)" height="33" :width="p.bbox.width+20" />
                    <text :ref="index+'ts'+i" stroke-width="0" :key="index+'ts'+i"
                        :x="getSubscriberAfterWidth(i,index)+10" :y="i*lineheight+20+yOffsetSub" fill="#000000"
                        stroke="#000">{{p.label}}</text>
                    <line :key="index+'ls'+i"  :stroke="p.pull?'wheat':'mediumaquamarine'" stroke-width="7"
                        :x1="getSubscriberAfterWidth(i,index)+p.bbox.width+20" :y1="i*lineheight+yOffsetSub+15"
                        :x2="getSubscriberAfterWidth(i,index)+p.bbox.width+50" :y2="i*lineheight+yOffsetSub+15"
                        v-if="index!=subscriber.length-1">
                        <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
                    </line>
                    <path stroke-dasharray='10, 10, 5'  :stroke="p.pull?'wheat':'mediumaquamarine'" fill="#fff" stroke-width="7" :d="getPathSub(i)"
                        :key="index+'ps'+i">
                        <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
                    </path>
                </template>
            </template>
            <ellipse ry="50" rx="50" id="svg_2" cy="200" cx="500" fill="darksalmon" />
            <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24"
                id="svg_3" y="206.45313" x="464" stroke-width="0" stroke="#000" fill="blanchedalmond">engine</text>
            <path id="svg_6"
                d="m504.25827,251.88514c-1.44512,0.136 -2.92259,0.23002 -4.44215,0.23002l0,0c-1.35921,0 -2.67955,-0.07442 -3.96753,-0.18475l0,0l-11.15224,14.33405l-2.74267,-0.77754c-3.21901,-0.90395 -6.34573,-2.03802 -9.35247,-3.39882l0,0l-2.60659,-1.17938l0.67067,-18.005c-2.37013,-1.65899 -4.58141,-3.50582 -6.62925,-5.53075l0,0l-17.63238,3.78768l-1.61031,-2.36545c-1.88896,-2.77664 -3.49927,-5.6863 -4.92645,-8.62811l0,0l-1.23936,-2.56949l11.97204,-13.25179c-0.7485,-2.80596 -1.24419,-5.70262 -1.50016,-8.65414l0,0l-15.86496,-8.38845l0.28835,-2.84166c0.34026,-3.39889 0.99793,-6.65182 1.78365,-9.77846l0,0l0.70152,-2.77361l17.69557,-2.44945c1.26197,-2.66334 2.74761,-5.18732 4.42105,-7.55911l0,0l-6.75226,-16.6247l2.03802,-1.99589c2.39595,-2.33286 4.96052,-4.44857 7.63675,-6.38294l0,0l2.31828,-1.67176l15.27527,9.59371c2.57429,-1.18579 5.26674,-2.16107 8.05642,-2.90959l0,0l5.53728,-17.18201l2.8545,-0.21702c1.53744,-0.11336 3.18988,-0.24626 4.98645,-0.24626l0,0c1.79174,0 3.43926,0.1329 4.97676,0.24626l0,0l2.85442,0.21702l5.5972,17.36035c2.68278,0.74832 5.28296,1.7042 7.77458,2.86422l0,0l15.48913,-9.73007l2.32635,1.67193c2.67629,1.93114 5.24559,4.0533 7.63685,6.37647l0,0l2.04603,1.99589l-6.95963,17.11728c1.51638,2.20318 2.88363,4.53609 4.05171,6.98881l0,0l18.24804,2.5272l0.70955,2.77344c0.79706,3.12353 1.45159,6.37646 1.7836,9.78183l0,0l0.28843,2.84148l-16.41906,8.68001c-0.2462,2.69264 -0.68362,5.34303 -1.33651,7.92526l0,0l12.37055,13.66671l-1.24414,2.57896c-1.42238,2.95176 -3.02464,5.87103 -4.92169,8.63802l0,0l-1.6103,2.35868l-18.06977,-3.87169c-1.9149,1.91478 -3.9885,3.67742 -6.20477,5.26831l0,0l0.68849,18.35816l-2.61308,1.18265c-3.01005,1.35434 -6.13185,2.49161 -9.35075,3.3956l0,0l-2.75251,0.7776l-11.17653,-14.36972l0,0l0.00001,0.00001zm14.34048,4.59775c0.96397,-0.32087 1.91167,-0.66764 2.84959,-1.03701l0,0l-0.64475,-17.33748l2.03317,-1.30584c3.04562,-1.97631 5.81909,-4.34815 8.28158,-7.04052l0,0l1.63945,-1.79492l17.09785,3.66112c0.51356,-0.85866 1.01086,-1.73668 1.49036,-2.63408l0,0l-11.69496,-12.9311l0.72577,-2.31024c1.03191,-3.32753 1.61839,-6.89491 1.7917,-10.6175l0,0l0.10693,-2.42374l15.53443,-8.21019c-0.16197,-0.99476 -0.34819,-1.98294 -0.56048,-2.97451l0,0l-17.2841,-2.39097l-0.92981,-2.23574c-1.39004,-3.34387 -3.2288,-6.47368 -5.42393,-9.36054l0,0l-1.45157,-1.92462l6.57409,-16.17107c-0.76144,-0.6676 -1.5423,-1.3155 -2.34419,-1.94406l0,0l-14.67419,9.21151l-2.16116,-1.14066c-3.20112,-1.68481 -6.66318,-2.96465 -10.31475,-3.79403l0,0l-2.36197,-0.54103l-5.29909,-16.43363c-0.51523,-0.02583 -1.01579,-0.03892 -1.50342,-0.03892l0,0c-0.49739,0 -0.99794,0.01309 -1.51639,0.03892l0,0l-5.26178,16.32675l-2.39606,0.51193c-3.71477,0.79692 -7.25772,2.09627 -10.55772,3.80376l0,0l-2.15631,1.121l-14.43609,-9.0656c-0.79704,0.62856 -1.57956,1.27645 -2.33442,1.94406l0,0l6.39904,15.74667l-1.50331,1.9277c-2.34421,3.01001 -4.29314,6.30848 -5.75441,9.84985l0,0l-0.92501,2.24537l-16.72846,2.31334c-0.2122,0.99157 -0.40008,1.97975 -0.55723,2.97451l0,0l14.99663,7.92838l0.0923,2.44288c0.15711,3.94333 0.8165,7.72771 1.95048,11.26586l0,0l0.74206,2.32625l-11.32572,12.5294c0.47634,0.90067 0.97204,1.77868 1.49051,2.63729l0,0l16.63115,-3.58025l1.65572,1.79498c2.55153,2.79308 5.46596,5.2198 8.6769,7.23522l0,0l2.07205,1.29261l-0.63347,17.07187c0.93963,0.36938 1.89057,0.71614 2.85448,1.03701l0,0l10.527,-13.53701l2.40409,0.29471c1.81444,0.23009 3.58026,0.37913 5.33803,0.37913l0,0c1.89055,0 3.79729,-0.16517 5.74623,-0.44061l0,0l2.42522,-0.3401l10.60794,13.64388l0,0l0,0.00001z"
                fill="lightgray">
                <animateTransform attributeType="XML" attributeName="transform" begin="0s" dur="1s" type="rotate"
                    from="0 500 200" to="40 500 200" repeatCount="indefinite" />
            </path>
            <line x1="10" y1="10" x2="50" y2="10" stroke-width="7" stroke="mediumaquamarine">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="10" y1="30" x2="50" y2="30" stroke-width="7" stroke="wheat">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
            </line>
            <text x="50" y="13">push</text>
            <text x="50" y="33">pull</text>
        </g>
    </svg>
</template>

<script>
const publishers = [
    [{ label: "Pusher" }, { label: "rtmp" }],
    [{ label: "camera" ,pull:true}, { label: "rtsp",pull:true }],
    [{ label: "m3u8",pull:true }, { label: "hls",pull:true }, { label: "ts",pull:true }],
    [{ label: "flv files" ,pull:true}, { label: "record",pull:true }],
    [{ label: "ts files" ,pull:true}, { label: "ts" ,pull:true}]
].map(x => x.map(y => ((y.bbox = { width: 0 }), y)));
const subscribers = [
    [{ label: "hdl",pull:true }, { label: "cdn" ,pull:true}],
    [{ label: "jessica" ,pull:true}, { label: "Player" ,pull:true}],
    [{ label: "gateway" ,pull:true}, { label: "dashboard",pull:true }],
    [{ label: "record" }, { label: "flv files" }],
    [{ label: "hls" }, { label: "m3u8 and ts files" }],
    [{ label: "rtmp" ,pull:true}, { label: "Player" ,pull:true}]
].map(x => x.map(y => ((y.bbox = { width: 0 }), y)));
export default {
    data() {
        return {
            lineheight: 60,
            publishers,
            subscribers,
            hasMounted: false
        };
    },
    props: {
        selectedPubs: Array,
        selectedSubs: Array
    },
    watch: {
        selectedPubs(v) {
            if (this.hasMounted)
                this.publishers = publishers.filter(
                    p => v.indexOf(p[1].label) != -1
                );
        },
        selectedSubs(v) {
            console.log(v);
            if (this.hasMounted)
                this.subscribers = subscribers.filter(
                    p => v.indexOf(p[0].label) != -1
                );
        }
    },
    mounted() {
        for (var i = 0; i < this.publishers.length; i++) {
            for (var j = 0; j < this.publishers[i].length; j++) {
                this.publishers[i][j].bbox = this.$refs[
                    j + "t" + i
                ][0].getBBox();
            }
        }
        for (i = 0; i < this.subscribers.length; i++) {
            for (j = 0; j < this.subscribers[i].length; j++) {
                this.subscribers[i][j].bbox = this.$refs[
                    j + "ts" + i
                ][0].getBBox();
            }
        }
        this.hasMounted = true;
    },
    computed: {
        yOffset() {
            return (
                200 -
                (this.publishers.length * this.lineheight) / 2 +
                (this.lineheight - 33) / 2
            );
        },
        yOffsetSub() {
            return (
                200 -
                (this.subscribers.length * this.lineheight) / 2 +
                (this.lineheight - 33) / 2
            );
        }
    },
    methods: {
        getAfterWidth(i, j) {
            var result = -50;
            for (var k = j; k < this.publishers[i].length; k++) {
                result += this.publishers[i][k].bbox.width + 50;
            }
            return result;
        },
        getAfterWidthSub(i, j) {
            var result = 0;
            for (var k = 0; k < j; k++) {
                result += this.subscribers[i][k].bbox.width + 50;
            }
            return result;
        },
        getPublisherAfterWidth(i, j) {
            return 370 - this.getAfterWidth(i, j);
        },
        getSubscriberAfterWidth(i, j) {
            return 620 + this.getAfterWidthSub(i, j);
        },
        getPath(i) {
            var h =
                (this.publishers.length - 1 - 2 * i) * this.lineheight * 0.3;
            return (
                "m390," +
                (this.yOffset + i * this.lineheight + 15) +
                "c30,0 " +
                (60 - 30) +
                "," +
                h +
                " 60," +
                h
            );
        },
        getPathSub(i) {
            var h =
                (this.subscribers.length - 1 - 2 * i) * this.lineheight * 0.3;
            return (
                "m560," +
                (this.yOffsetSub + i * this.lineheight + 15 + h) +
                "c30,0 " +
                (60 - 30) +
                "," +
                -h +
                " 60," +
                -h
            );
        }
    }
};
</script>
