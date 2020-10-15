<template>
  <div class="wrapper">
    <ul class="content">
      <li>费雷德离北鼻1</li>
      <li>费雷德离北鼻2</li>
      <li>费雷德离北鼻3</li>
      <li>费雷德离北鼻4</li>
      <li>费雷德离北鼻5</li>
      <li>费雷德离北鼻6</li>
      <li>费雷德离北鼻7</li>
      <li>费雷德离北鼻8</li>
      <li>费雷德离北鼻9</li>
      <li>费雷德离北鼻10</li>
      <li>费雷德离北鼻11</li>
      <li>费雷德离北鼻12</li>
      <li>费雷德离北鼻13</li>
      <li>费雷德离北鼻14</li>
      <li>费雷德离北鼻15</li>
      <li>费雷德离北鼻16</li>
      <li>费雷德离北鼻17</li>
      <li>费雷德离北鼻18</li>
      <li>费雷德离北鼻19</li>
      <li>费雷德离北鼻20</li>
      <li>费雷德离北鼻21</li>
      <li>费雷德离北鼻22</li>
      <li>费雷德离北鼻23</li>
      <li>费雷德离北鼻24</li>
      <li>费雷德离北鼻25</li>
      <li>费雷德离北鼻26</li>
      <li>费雷德离北鼻27</li>
      <li>费雷德离北鼻28</li>
      <li>费雷德离北鼻29</li>
      <li>费雷德离北鼻30</li>
      <li>费雷德离北鼻31</li>
      <li>费雷德离北鼻32</li>
      <li>费雷德离北鼻33</li>
      <li>费雷德离北鼻34</li>
      <li>费雷德离北鼻35</li>
      <li>费雷德离北鼻36</li>
      <li>费雷德离北鼻37</li>
      <li>费雷德离北鼻38</li>
      <li>费雷德离北鼻39</li>
      <li>费雷德离北鼻40</li>
      <li>费雷德离北鼻41</li>
      <li>费雷德离北鼻42</li>
      <li>费雷德离北鼻43</li>
      <li>费雷德离北鼻44</li>
      <li>费雷德离北鼻45</li>
      <li>费雷德离北鼻46</li>
      <li>费雷德离北鼻47</li>
      <li>费雷德离北鼻48</li>
      <li>费雷德离北鼻49</li>
      <li>费雷德离北鼻50</li>
      <li>费雷德离北鼻51</li>
      <li>费雷德离北鼻52</li>
      <li>费雷德离北鼻53</li>
      <li>费雷德离北鼻54</li>
      <li>费雷德离北鼻55</li>
      <li>费雷德离北鼻56</li>
      <li>费雷德离北鼻57</li>
      <li>费雷德离北鼻58</li>
      <li>费雷德离北鼻59</li>
      <li>费雷德离北鼻60</li>
      <li>费雷德离北鼻61</li>
      <li>费雷德离北鼻62</li>
      <li>费雷德离北鼻63</li>
      <li>费雷德离北鼻64</li>
      <li>费雷德离北鼻65</li>
      <li>费雷德离北鼻66</li>
      <li>费雷德离北鼻67</li>
      <li>费雷德离北鼻68</li>
      <li>费雷德离北鼻69</li>
      <li>费雷德离北鼻70</li>
      <li>费雷德离北鼻71</li>
      <li>费雷德离北鼻72</li>
      <li>费雷德离北鼻73</li>
      <li>费雷德离北鼻74</li>
      <li>费雷德离北鼻75</li>
      <li>费雷德离北鼻76</li>
      <li>费雷德离北鼻77</li>
      <li>费雷德离北鼻78</li>
      <li>费雷德离北鼻79</li>
      <li>费雷德离北鼻80</li>
      <li>费雷德离北鼻81</li>
      <li>费雷德离北鼻82</li>
      <li>费雷德离北鼻83</li>
      <li>费雷德离北鼻84</li>
      <li>费雷德离北鼻85</li>
      <li>费雷德离北鼻86</li>
      <li>费雷德离北鼻87</li>
      <li>费雷德离北鼻88</li>
      <li>费雷德离北鼻89</li>
      <li>费雷德离北鼻90</li>
      <li>费雷德离北鼻91</li>
      <li>费雷德离北鼻92</li>
      <li>费雷德离北鼻93</li>
      <li>费雷德离北鼻94</li>
      <li>费雷德离北鼻95</li>
      <li>费雷德离北鼻96</li>
      <li>费雷德离北鼻97</li>
      <li>费雷德离北鼻98</li>
      <li>费雷德离北鼻99</li>
      <li>费雷德离北鼻100</li>
    </ul>
    category


  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Category",

  mounted() {

    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      // probeType:3,
      // pullUpLoad:true
    });
    this.scroll.on('scroll',(position)=>{

      // console.log(position);

    })

  },
  data() {
    return {
      scroll: null
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background: red;
  font-size: 18px;
  overflow: hidden;
  /*overflow-y: scroll;!*在移动端设置了该属性，局部滚动后会非常卡顿*!*/
}
</style>
